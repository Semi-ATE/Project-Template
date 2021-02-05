var   comp,filename;
var   fileexits = false;
var   filename;
var   StrList;

function Button1Click(Sender)
{
 GenerateRule();
}

function Button2Click(Sender)
{
 if (OpenDialog1.Execute())
 {
   filename = OpenDialog1.FileName;
   Edit2.Text = filename;
   Memo1.Lines.Add("Input File has been selected");
   fileexits = true;
 }
 else
 {
    filename = "";
    fileexits = false;
 }
}

function RemoveSquareBrackets(instring)
{
var      i;
var      n;

 while ((n = instring.indexOf("[")) != -1)
 {
  instring = instring.substring(0,n) + instring.substring(n+1);
 }
 while ((n = instring.indexOf("]")) != -1)
 {
  instring = instring.substring(0,n) + instring.substring(n+1);
 }
 return instring;
}

function CheckDifferentialPair(instring)
{
   var n = instring.lastIndexOf("_");
   if (n < 0)
      return -1;
   if (n > instring.length - 2)
      return -1;
   if (instring == "DIFF_P")
      return 1;
   else
       if (instring == "DIFF_N")
          return 2;
       else
          return 0;
}

function RemoveDifferentialPairSubscript(instring)
{
   var n = instring.lastIndexOf("_");
   if (n > 2 && n < instring.length - 1)
   {
      var s = instring.substring(0,n);
      if (n < instring.length - 2)
         s += instring.substring(n+2);
   }
   return s;
}

function GenerateRule()
{
 var MinLimit,MinLimit_N,MinLimit_P;
 var MaxLimit,MaxLimit_N,MaxLimit_P;
 var rl;
 var it,itnet;
 var exists;
 var RuleName;
 var Comment;
 var netname;
 var strMinVal;
 var strMaxVal;
 var diffpairstr;
 var DiffPairFound;
 var fl;
 var ts;

 Memo1.Clear();
 var PcbProject = GetWorkspace.DM_FocusedProject;
 if (PcbProject == NULL)
 {
    ShowMessage("No active project");
    return;
 }
 if (AnsiUpperCase(ExtractFileExt(PcbProject.DM_ProjectFileName)) != ".PRJPCB")
 {
    ShowMessage("Current Project is not a PCB Project");
    return;
 }
 // PcbProject.DM_Compile();
 PrjName = ExtractFileName(PcbProject.DM_ProjectFileName);
 StrBuf = "Project Name: ";
 StrBuf += PrjName;
 StrBuf = "Number of Project Documents: ";
 n = PcbProject.DM_LogicalDocumentCount;
 StrBuf += n.toString();
 Memo1.Lines.Add(StrBuf);
 // StrList.Clear();
 for (DocNum = 0;DocNum < PcbProject.DM_LogicalDocumentCount;DocNum++)
 {
    Doc = PcbProject.DM_LogicalDocuments(DocNum);
    DocType = Doc.DM_DocumentKind;
    if (DocType == "PCB")
    {
       if (!fileexits)
       {
          ShowMessage("No Input File");
          return;
       }
       MinLimit_N = 0;
       MinLimit_P = 0;
       MaxLimit_N = 0;
       MaxLimit_P = 0;
       StrList.LoadFromFile(filename);
       Memo1.Lines.Add("File has been read");
//     if (!Client.IsDocumentOpen(Doc.DM_FullPath))
       Client.ShowDocument(Client.OpenDocument("PCB",Doc.DM_FullPath));
       StrBuf = "Document Name: ";
       StrBuf += ExtractFileName(Doc.DM_FullPath);
       Memo1.Lines.Add(StrBuf);
       var Board = PCBServer.GetCurrentPCBBoard();
       if (Board == NULL)
       {
          ShowMessage("No current PCB");
          return;
       }
       Memo1.Lines.Add("Addign Rules ...");
       it = Board.BoardIterator_Create();
       it.AddFilter_ObjectSet(MkSet(eRuleObject));
       it.AddFilter_LayerSet(AllLayers);
       it.AddFilter_Method(eProcessAll);
       itnet = Board.BoardIterator_Create();
       itnet.AddFilter_ObjectSet(MkSet(eNetObject));
       itnet.AddFilter_LayerSet(AllLayers);
       itnet.AddFilter_Method(eProcessAll);
       var cnt = 0;
       Edit1.Text = 0;
       for (var i=0;i<StrList.Count;i++)
       {
          cnt++;
          Edit1.Text = cnt;
          var str = StrList.Get(i);
          for (var j = 0;j < 20;j++)
          {
            var n = str.indexOf(";");
            if (n != -1)
            {
               var gettext = str.substring(0,n);
               str = str.substring(n+1);
            }
            else
               var gettext = str;
            if (gettext.length <= 0)
            continue;
            switch (j)
            {
               case 0:
                  RuleName = gettext;
                  break;
               case 1:
                  Comment = gettext;
                  break;
               case 18:
                  strMinVal = gettext;
                  MinLimit = MMsToCoord(parseFloat(strMinVal));
                  break;
               case 19:
                  strMaxVal = gettext;
                  MaxLimit = MMsToCoord(parseFloat(strMaxVal));
                  break;
               case 5:
                  netname = RemoveSquareBrackets(gettext);
                  break;
               case 8:
                  diffpairstr = RemoveSquareBrackets(gettext);
               default:
                  continue;
            }
         }
         if (RuleName.length > 0 && netname.length > 0 &&
             Comment.length > 0 && strMinVal.length > 0 &&
             strMaxVal.length > 0)
         {
            var net = itnet.FirstPCBObject;
            var netfound = false;
            while (net != NULL)
            {
               var ms = net.Name;
               if (ms.toUpperCase() == netname.toUpperCase())
                  netfound = true;
               net = itnet.NextPCBObject;
            }
            if (!netfound)
            {
               var es = "Net \'";
               es += netname;
               es += "\' not found."
               ShowMessage(es);
               continue;
            }
            isDifferential = CheckDifferentialPair(diffpairstr);
            if (isDifferential == 2)
            {
               MinLimit_N = MinLimit;
               MaxLimit_N = MaxLimit;
               if (MinLimit_P > 0 && MaxLimit_P)
                  DiffPairFound = true;
               else
                  continue;
            }
            else
               if (isDifferential == 1)
               {
                  MinLimit_P = MinLimit;
                  MaxLimit_P = MaxLimit;
                  if (MinLimit_P > 0 && MaxLimit_P)
                  {
                     DiffPairFound = true;
                     diffnetname = RemoveDifferentialPairSubscript(netname);
                  }
                  else
                      continue;
               }
               else
               {
                  MinLimit_N = 0;
                  MaxLimit_N = 0;
                  MinLimit_P = 0;
                  MaxLimit_P = 0;
                  DiffPairFound = false;
               }
            rl = it.FirstPCBObject;
            while (rl != NULL)
            {
               var ls = rl.Name;
               exists = false;
               if (rl.RuleKind == eRule_MaxMinLength)
               {
                  if (rl.Name == RuleName)
                  {
                     exists = true;
                     break;
                  }
               }
               rl = it.NextPCBObject;
            }
            MinLimit = MMsToCoord(parseFloat(strMinVal));
            MaxLimit = MMsToCoord(parseFloat(strMaxVal));
            if (exists)
            {
               var Prule = rl;
               Prule.NetScope = eNetScope_SameNetOnly;
               Prule.LayerKind = eRuleLayerKind_SameLayer;
               Prule.Comment = Comment;
               if (DiffPairFound)
               {
                  fl = "InDifferentialPair('";
                  fl += diffnetname;
                  fl += "')";
                  Prule.MaxLimit = (MaxLimit_P + MaxLimit_N) / 2.0;
                  Prule.MinLimit = (MinLimit_P + MinLimit_N) / 2.0;
                  ts = "Differential Rule ";
               }
               else
               {
                  var fl = "InNet('";
                  fl += netname;
                  fl += "')";
                  Prule.MaxLimit = MaxLimit;
                  Prule.MinLimit = MinLimit;
                  ts = "Single Ended Rule ";
               }
               Prule.Scope1Expression = fl;
               ts += RuleName;
               ts += " modified";
               Memo1.Lines.Add(ts);
            }
            else
            {
               var Prule = PCBServer.PCBRuleFactory(eRule_MaxMinLength);
               Prule.NetScope = eNetScope_SameNetOnly;
               Prule.LayerKind = eRuleLayerKind_SameLayer;
               Prule.Name = RuleName;
               Prule.Comment = Comment;
               if (DiffPairFound)
               {
                  fl = "InDifferentialPair('";
                  fl += diffnetname;
                  fl += "')";
                  Prule.MaxLimit = (MaxLimit_P + MaxLimit_N) / 2.0;
                  Prule.MinLimit = (MinLimit_P + MinLimit_N) / 2.0;
                  ts = "Differential Rule ";
               }
               else
               {
                  fl = "InNet('";
                  fl += netname;
                  fl += "')";
                  Prule.MaxLimit = MaxLimit;
                  Prule.MinLimit = MinLimit;
                  ts = "Single Ended Rule ";
               }
               Prule.Scope1Expression = fl;
               Board.AddPCBObject(Prule);
               ts += RuleName;
               ts += " generated";
               Memo1.Lines.Add(ts);
            }
         }
         else
         {
            Memo1.Lines.Add("Cannot generate rule");
         }
      }
      Board.BoardIterator_Destroy(it);
      Board.BoardIterator_Destroy(itnet);
    }
 }
 Memo1.Lines.Add("... all done.");
}

function Form1Show(Sender)
{
 StrList = TStringList.Create();
 Memo1.Clear();
}

function Form1Close(Sender, Action)
{
 delete StrList;
}

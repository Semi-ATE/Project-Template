var   comp,filename;
var   StrList;
var   fileexits = false;
var   PinString = [];
var   PadString = [];
var   LabelOffsetRight = 1;
var   LabelOffsetLeft = 1;
var   LabelOffsetBottom = 1;
var   LabelOffsetTop = 1;
var   PcbProject;

function Button1Click(Sender)
{
 comp = Edit1.Text;
 SearchComponents(comp);
}

function Button2Click(Sender)
{
 if (OpenDialog1.Execute())
 {
    filename = OpenDialog1.FileName;
    Edit2.Text = filename;
    StrList.LoadFromFile(filename);
    Memo1.Lines.Add("File has been read");
    PinString.length = 0;
    PadString.length = 0;
    for (i=0;i<StrList.Count;i++)
    {
     var str = StrList.Get(i);
     var n = str.indexOf(",");
     var PinName = str.substring(0,n);
//     PadName.trim();
     var PadName = str.substring(n+1,str.length);
//     PinName.trim();
     PadString[i] = PadName;
     PinString[i] = PinName;
    }
    buf = StrList.Count;
    buf += " Pads read";
    Memo1.Lines.Add(buf);
    Edit3.Text = StrList.Count.toString();
    fileexits = true;
 }
 else
     filename = "";
}

function PlaceLabel(x,y,rot,text,SchDoc)
{
var      SchNetLabel;

 SchNetLabel = SchServer.SchObjectFactory(eNetlabel,eCreate_GlobalCopy);
 if (SchNetLabel == NULL)
    return false;
 SchDoc.AddSchObject(SchNetLabel);
 SchNetLabel.Text = text;
 SchServer.RobotManager.SendMessage(SchNetLabel.I_ObjectAddress, c_BroadCast, SCHM_BeginModify, c_NoEventData);
 SchNetLabel.MoveToXY(MilsToCoord(x), MilsToCoord(y));
 SchNetLabel.RotateBy90(Point(MilsToCoord(x), MilsToCoord(y)), rot);

 SchNetLabel.SetState_xSizeySize;

 SchServer.RobotManager.SendMessage(SchNetLabel.I_ObjectAddress, c_BroadCast, SCHM_EndModify, c_NoEventData);

 SchServer.RobotManager.SendMessage(SchDoc.I_ObjectAddress,c_BroadCast,
       SCHM_PrimitiveRegistration,SchNetLabel.I_ObjectAddress);

 SchNetLabel.GraphicallyInvalidate;
 return true;
}

function SearchComponents(comp)
{
 Memo1.Clear();
 PcbProject = GetWorkspace.DM_FocusedProject;
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
 PcbProject.DM_Compile();
 PrjName = ExtractFileName(PcbProject.DM_ProjectFileName);
 StrBuf = "Project Name: ";
 StrBuf += PrjName;
 StrBuf = "Number of Project Documents: ";
 var n = PcbProject.DM_LogicalDocumentCount;
 StrBuf += n.toString();
 Memo1.Lines.Add(StrBuf);
 LabelOffsetRight = parseInt(Edit4.Text,10);
 LabelOffsetLeft = parseInt(Edit5.Text,10);
 LabelOffsetBottom = parseInt(Edit5.Text,10);
 LabelOffsetTop = parseInt(Edit4.Text,10);
 for (DocNum = 0;DocNum < PcbProject.DM_LogicalDocumentCount;DocNum++)
 {
  Doc = PcbProject.DM_LogicalDocuments(DocNum);
  DocType = Doc.DM_DocumentKind;
  if (DocType == "SCH")
  {
     if (!Client.IsDocumentOpen(Doc.DM_FullPath))
        Client.ShowDocument(Client.OpenDocument("Sch",Doc.DM_FullPath));
     SchDoc = SchServer.GetSchDocumentByPath(Doc.DM_FullPath);
     GridSize = SchDoc.VisibleGridSize / cInternalPrecision;
     if (SchDoc != NULL)
     {
      SchName =  ExtractFileName(PcbProject.DM_LogicalDocuments(DocNum).DM_FullPath);
      StrBuf = "Schematic Sheet: ";
      StrBuf += SchName;
      Memo1.Lines.Add(StrBuf);
      SchIterator = SchDoc.SchIterator_Create();
      SchIterator.AddFilter_ObjectSet(MkSet(eSchComponent))
      GridSize = SchDoc.VisibleGridSize / cInternalPrecision;
      try
      {
       SchComponent = SchIterator.FirstSchObject;
       while (SchComponent != NULL)
       {
//        if (Supports(SchComponent,ISch_Component,Sch_Component))
//        {
                Designator = SchComponent.GetState_SchDesignator();
                ID = SchComponent.CurrentPartID;
                if (Designator.Text == comp)
                {
                 StrBuf = "Component found: ";
                 StrBuf += Designator.Text;
                 StrBuf += String.fromCharCode('A'.charCodeAt() + ID - 1);
                 Memo1.Lines.Add(StrBuf);
                 PinIterator = SchComponent.SchIterator_Create();
                 PinIterator.AddFilter_CurrentPartPrimitives;
                 PinIterator.AddFilter_ObjectSet(MkSet(ePin));
                 try
                 {
                  Pin = PinIterator.FirstSchObject;
                  while (Pin != NULL)
                  {
                   PinName = Pin.Name;
                   PinDesignator = Pin.Designator;
                   for (i = 0;i < PadString.length;i++)
                   {
                    if (PinDesignator == PadString[i])
                    {
                     StrBuf = "Pad ";
                     StrBuf += PinDesignator;
                     StrBuf += " found";
                     Memo1.Lines.Add(StrBuf);
                     Location = Pin.GetState_Location;
                     PinX = Location.X / cInternalPrecision;
                     PinY = Location.Y / cInternalPrecision;
                     PinLen = Pin.PinLength / cInternalPrecision;;
                     PinOrientation = Pin.Orientation;
                     switch (PinOrientation)
                     {
                      case eRotate0:
                           PlaceLabel(PinX+PinLen+LabelOffsetRight*GridSize,PinY,eRotate0,PinString[i],SchDoc);
                           break;
                      case eRotate90:
                           PlaceLabel(PinX,PinY+PinLen+LabelOffsetTop*GridSize,eRotate90,PinString[i],SchDoc);
                           break;
                      case eRotate180:
                           PlaceLabel(PinX-PinLen-LabelOffsetLeft*GridSize,PinY,eRotate0,PinString[i],SchDoc);
                           break;
                      case eRotate270:
                           PlaceLabel(PinX,PinY-PinLen-LabelOffsetBottom*GridSize,eRotate90,PinString[i],SchDoc);
                           break;
                     }
                    }
                   }
                   Pin = PinIterator.NextSchObject;
                  }
                 }
                 finally
                 {
                  SchComponent.SchIterator_Destroy(PinIterator);
                 }
                }
//        }
        SchComponent = SchIterator.NextSchObject;
       }
      }
      finally
      {
       if (SchIterator != NULL)
          SchDoc.SchIterator_Destroy(SchIterator);
      }
      SchDoc.GraphicallyInvalidate();
      ResetParameters;
      AddStringParameter("Action", "Redraw");
      RunProcess("Sch:Zoom");
     }
    else
    {
     Memo1.Lines.Add("No valid schematic document");
     return;
    }
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

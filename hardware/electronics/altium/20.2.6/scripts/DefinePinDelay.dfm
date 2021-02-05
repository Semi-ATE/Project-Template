object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Auto Name Pinning'
  ClientHeight = 443
  ClientWidth = 521
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  OnClose = Form1Close
  OnShow = Form1Show
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 24
    Top = 85
    Width = 55
    Height = 13
    Caption = 'Component'
  end
  object Label2: TLabel
    Left = 24
    Top = 53
    Width = 80
    Height = 13
    Caption = 'Number of Pads:'
  end
  object Label3: TLabel
    Left = 24
    Top = 128
    Width = 79
    Height = 13
    Caption = 'Offset Left/Top:'
  end
  object Label4: TLabel
    Left = 24
    Top = 160
    Width = 101
    Height = 13
    Caption = 'Offset Right/Bottom:'
  end
  object Edit1: TEdit
    Left = 128
    Top = 82
    Width = 120
    Height = 21
    TabOrder = 0
    Text = 'U1'
  end
  object Button1: TButton
    Left = 424
    Top = 80
    Width = 75
    Height = 25
    Caption = 'Select'
    TabOrder = 1
    OnClick = Button1Click
  end
  object Button2: TButton
    Left = 24
    Top = 14
    Width = 75
    Height = 25
    Caption = 'Pin File'
    TabOrder = 2
    OnClick = Button2Click
  end
  object Memo1: TMemo
    Left = 16
    Top = 224
    Width = 488
    Height = 200
    Lines.Strings = (
      'Memo1')
    ScrollBars = ssVertical
    TabOrder = 3
  end
  object Edit2: TEdit
    Left = 128
    Top = 17
    Width = 376
    Height = 21
    ReadOnly = True
    TabOrder = 4
  end
  object Edit3: TEdit
    Left = 128
    Top = 50
    Width = 72
    Height = 21
    ReadOnly = True
    TabOrder = 5
  end
  object CheckBox1: TCheckBox
    Left = 272
    Top = 84
    Width = 128
    Height = 17
    Caption = 'Component from File'
    TabOrder = 6
  end
  object Edit4: TEdit
    Left = 128
    Top = 124
    Width = 72
    Height = 21
    NumbersOnly = True
    TabOrder = 7
    Text = '1'
  end
  object Edit5: TEdit
    Left = 128
    Top = 157
    Width = 72
    Height = 21
    NumbersOnly = True
    TabOrder = 8
    Text = '1'
  end
  object OpenDialog1: TOpenDialog
    DefaultExt = 'pin'
    Filter = 'Pin File (*.pin)|*.pin'
    Options = [ofHideReadOnly, ofFileMustExist, ofEnableSizing]
    Title = 'Pin File'
    Left = 488
    Top = 144
  end
end

object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Auto Name Pinning'
  ClientHeight = 353
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
  object Button1: TButton
    Left = 24
    Top = 64
    Width = 160
    Height = 25
    Caption = 'Generate Rules'
    TabOrder = 0
    OnClick = Button1Click
  end
  object Button2: TButton
    Left = 24
    Top = 14
    Width = 75
    Height = 25
    Caption = 'Rule File'
    TabOrder = 1
    OnClick = Button2Click
  end
  object Memo1: TMemo
    Left = 16
    Top = 136
    Width = 488
    Height = 200
    Lines.Strings = (
      'Memo1')
    ScrollBars = ssVertical
    TabOrder = 2
  end
  object Edit2: TEdit
    Left = 128
    Top = 17
    Width = 376
    Height = 21
    ReadOnly = True
    TabOrder = 3
  end
  object Edit1: TEdit
    Left = 432
    Top = 64
    Width = 73
    Height = 21
    Alignment = taRightJustify
    ReadOnly = True
    TabOrder = 4
    Text = '0'
  end
  object OpenDialog1: TOpenDialog
    DefaultExt = 'csv'
    Filter = 'Rule File (*.csv)|*.csv'
    Options = [ofHideReadOnly, ofFileMustExist, ofEnableSizing]
    Left = 248
    Top = 40
  end
end

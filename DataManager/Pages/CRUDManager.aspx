<%@ Page Language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />

<html>
<head>
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="../Content/crudManager.css" rel="stylesheet" />
    <link href="../Content/bootstrap.css" rel="stylesheet" />
    <script src="../Scripts/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script src="../Scripts/jquery-1.9.1.intellisense.js"></script>
    <script src="../Scripts/bootstrap.js"></script>
    <script src="../Scripts/dataManipulate.js"></script>

</head>
<body class="container">
    <div class="wrapper col-md-5">
        <h4>
            <a href="https://onmywaybybuddhi.sharepoint.com/HelloWorld/Lists/DataList">CRUD Operations
            </a>
        </h4>
        <div class="outer-wrapper">
        <div class="btn-wrapper">
            <div class="inner-wrapper">
                <span title="Create a List Item" id="create" class="glyphicon glyphicon-plus btn btn-lg"></span>
            </div>

               <div class="inner-wrapper">
                <span title="Read a List Item" id="read" class="glyphicon glyphicon-folder-open btn btn-lg"></span>
            </div>
        </div>
        <div class="btn-wrapper">
               <div class="inner-wrapper">
                <span title="Update a List Item" id="update" class="glyphicon glyphicon-pencil btn btn-lg"></span>
            </div>

               <div class="inner-wrapper">
                <span title="Delete a List Item" id="delete" class="glyphicon glyphicon-remove btn btn-lg"></span>
            </div>
        </div>
    </div>
</div>
</body>
</html>

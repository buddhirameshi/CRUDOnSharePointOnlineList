var siteUrl = '/HelloWorld';
var clientContext;


$(document).ready(function () {
    clientContext = new SP.ClientContext(siteUrl);
});


function getQueryStringParameter(paramToRetrieve) {
    var params =
        document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
}

/* Start of Create Logic*/
function createListItem() {
    var oList = clientContext.get_web().get_lists().getByTitle('DataList');
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
    oListItem.set_item('Title', '1');
    oListItem.set_item('Age', 52);
    oListItem.set_item('Salary', 456);
    oListItem.set_item('Date', '12/1/2016 12:00 AM');
    oListItem.set_item('IsActive', 'Yes');
    oListItem.update();
    clientContext.load(oListItem);
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onCreateQuerySucceeded), Function.createDelegate(this, this.onCreateQueryFailed));
}

$(document).on("click", "#create", function () {
    createListItem();
});

function onCreateQuerySucceeded() {
    alert('Item created: ' + oListItem.get_item('Title'));
}

function onCreateQueryFailed(sender, args) {
    alert('Creation Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

/*End of create logic*/



/*Start of Delete logic*/
function deleteListItem() {
    this.itemId = 1;
    var oList = clientContext.get_web().get_lists().getByTitle('DataList');
    this.oListItem = oList.getItemById(itemId);
    oListItem.deleteObject();

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onDeleteQuerySucceeded),
        Function.createDelegate(this, this.onDeleteQueryFailed)
    );
}

$(document).on("click", "#delete", function () {
    deleteListItem();
});


function onDeleteQuerySucceeded() {
    alert('Item deleted: ' + itemId);
}

function onDeleteQueryFailed(sender, args) {
    alert('Deletion Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}


/*End of Delete logic*/



/*Start of Update logic*/


$(document).on("click", "#update", function () {
    updateListItem();
})

function onUpdateQuerySucceeded() {
    alert('Item updated: ' + oListItem.get_item('Title'));
}

function onUpdateQueryFailed(sender, args) {
    alert('Update Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

function updateListItem() {
    var oList = clientContext.get_web().get_lists().getByTitle('DataList');
    this.oListItem = oList.getItemById(1);
    oListItem.set_item('Title', 'Changed Title');
    oListItem.update();

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onUpdateQuerySucceeded),
        Function.createDelegate(this, this.onUpdateQueryFailed)
    );
}
/*End of Update logic*/



/*Start of Read logic*/
$(document).on("click", "#read", function () {
    readListItem();
})

function readListItem() {
    var oList = clientContext.get_web().get_lists().getByTitle('DataList');

    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>30</RowLimit></View>');
    this.collListItem = oList.getItems(camlQuery);

    clientContext.load(collListItem, 'Include(Title, Age,Salary, IsActive,Date)');

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onReadQuerySucceeded), Function.createDelegate(this, this.onReadQueryFailed));
}

function onReadQuerySucceeded() {
    alert(collListItem.get_count()+' Items retrieved');
}

function onReadQueryFailed(sender, args) {
    alert('Retrival failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

/*End of Read logic*/










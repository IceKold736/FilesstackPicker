window.addEventListener('DOMContentLoaded', function () {
    const apikey = 'AtwRBFYzSCq5JHi4KX9ALz';
    const client = filestack.init(apikey);
    const options = {
        displayMode: 'overlay',
        container: '#inline',
        maxFiles: 5,
        uploadInBackground: false,
        onUploadDone: (res) => getURL(res),
    };

    var thumbnail = "";
    var fileType = "";

    function getURL(response)
    {
    	let filesUploaded = '<h2>Files Uploaded:</h2>';
    	for (var i = 0 ; i <= response.filesUploaded.length -1; i++)
    	 {
    	 	fileType = detectFile(response.filesUploaded[i]);

    	 	if(fileType == "doc" || fileType == "image")
    	 	{
    	 		filesUploaded +=`
    		
    			<li> 
    				<a target="_blank" href="${response.filesUploaded[i].url}">
    					${response.filesUploaded[i].filename} - 
    					<img src="${thumbnail}" style="width:150px; padding: 10px;"> 
    				</a>
    			</li>
    		
    		`;
    	 	}
    	 	else
    	 	{
    	 		filesUploaded +=`
    		
    			<li> 
    				<a target="_blank" href="${response.filesUploaded[i].url}?dl=true">
    					${response.filesUploaded[i].filename}     					 
    				</a>
    			</li>

    		`;
    	 	}	
    	}    		
    	document.getElementById('filesList').innerHTML = filesUploaded;
    }

    function detectFile(item)
    {
    	var file = item;
    	console.log(item.mimetype);
    	if(item.mimetype.match( "application/\*"))
    	{
    		createThumbnail(file);
    		console.log("doc");
    		return "doc";
    	}
    	else if(item.mimetype.match("image/\*"))
    	{
    		thumbnail = item.url;
    		console.log("img");
    		return "image";

    	}
    	else
    	{
    		console.log("else");
    		return "else";

    	}

    }

    function createThumbnail(item)
    {
    	thumbnail = "https://cdn.filestackcontent.com/output=format:jpg/"+ item.handle;
    }

    const picker = client.picker(options);
    const openBtn = document.getElementById('open');
    openBtn.addEventListener('click', () => picker.open());
});







 //    function workflow(item)
 //    {
 //    	var xhr = new XMLHttpRequest();
 //    	console.log(item.header);
 //    	xhr.open('GET', 'https://cdn.filestackcontent.com/run_workflow=id:856f4619-320c-4583-9b47-ecfa62ee74bd/BDeUzLnTSaSspPh7zB1w', true);

 //    	xhr.onreadystatechange = function ()
 //    	{
 //    		if(this.readyState == 4 && this.status == 200)
 //    		{
 //    			console.log(this.responseText);
 //    		}
 //    	}

 //    	xhr.send();    	
	// }

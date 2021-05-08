window.addEventListener('DOMContentLoaded', function () {
    const apikey = 'AtwRBFYzSCq5JHi4KX9ALz';
    const client = filestack.init(apikey);
    let ul;
    const options = {
        displayMode: 'inline',
        container: '#inline',
        maxFiles: 5,
        uploadInBackground: false,
        onUploadDone: (res) => console.log(res),
    };

    const picker = client.picker(options);
    const openBtn = document.getElementById('open');
    const closeBtn = document.getElementById('close');
    openBtn.addEventListener('click', () => picker.open());
    closeBtn.addEventListener('click', () => picker.close());


});




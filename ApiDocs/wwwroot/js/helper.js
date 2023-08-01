let loanScript = (src) => {
    return new Promise((resolve, reject) => {
        let javaScriptLib = document.createElement('Script');
        javaScriptLib.src = src;
        document.body.appendChild(javaScriptLib);
        javaScriptLib.onload = () => {
            resolve(true);
        };
        javaScriptLib.onerror = () => {
            reject(new Error(`Failed to load the script: ${src}`));
        };
    })
}
(() => {
    loanScript('https://code.jquery.com/jquery-3.6.0.min.js').then((x) => {
        if (x) {
            loanScript('https://code.jquery.com/ui/1.13.0/jquery-ui.min.js').then((x) => {
                if (x) {
                    console.log('Script Load Success!');
                }
            });
        }
    });
})()
const model = (content, footer = '', title = '', size = '') => {
    $('#myModal').remove();
    let html = `<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog {size} modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header" style="cursor: move;">
                  <button type="button" onclick="closeModel()" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="exampleModalLabel">${title}</h4>
              </div>
              <div class="modal-body">
                  ${content}
              </div>
              <div class="modal-footer">
                  {footer}
              </div>
          </div>
      </div>
    </div>`;
    if (size != '') {
        let cussize = size == 'lg' ? 'modal-lg' : 'modal-xl';
        html = html.replace('{size}', cussize);
    }
    html = html.replace('{footer}', footer);
    $('body').append(html);
    $('#myModal').modal('show');
    $('.modal-backdrop').removeClass('fade');
};
const closeModel = () => {
    $('#myModal').modal('hide');
}
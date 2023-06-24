const model = (content, footer = '', title = '', size = '', Isdragble = true) => {
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
    if (Isdragble) {
        $('.modal-dialog').draggable({
            handle: ".modal-header"
        });
    }
    html = html.replace('{footer}', footer);
    $('body').append(html);
    $('#myModal').modal('show');
    $('.modal-backdrop').removeClass('fade');
};
const closeModel = () => {
    $('#myModal').modal('hide');
}
const element = document.getElementById('drag');
let draggedElement = null;
let dropedElement = document.getElementById('drop');

element.addEventListener('dragstart', dragstart_handler);
element.addEventListener('dragend', dragend_handler);
element.addEventListener('dragenter', dragenter_handler);
element.addEventListener('dragover', dragover_handler);
element.addEventListener('dragleave', dragleave_handler);
element.addEventListener('drop', drop_handler);

function dragstart_handler(event) {
  console.log('dragstart', event, this);
  draggedElement = this;
  this.classList.add('dragged');
}
function dragend_handler(event) {
  console.log('dragend', event, this);
  draggedElement = null;
  clearInterval(blinking);
  this.classList.remove('dragged');
}
function dragenter_handler(event) {
  if (this === dropedElement) {
    return;
  }
  console.log('dragenter', event, this);
  dropedElement.classList.add('under');
}
function dragover_handler(event) {
  if (this === draggedElement) {
    return;
  }
  console.log('dragover', event, this);
}
function dragleave_handler(event) {
  if (this === dropedElement) {
    return;
  }
  console.log('dragleave', event, this);
  dropedElement.classList.remove('under');
}
function drop_handler(event) {
  if (this === draggedElement) {
    return;
  }
  console.log('drop', event, this);
}

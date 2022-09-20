const item = document.querySelector('.item');
const places = document.querySelectorAll('.placeholder');

item.setAttribute('draggable', 'true');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (place of places) {
	place.addEventListener('dragover', dragover);
	place.addEventListener('dragenter', dragenter);
	place.addEventListener('dragleave', dragleave);
	place.addEventListener('drop', dragdrop);	
}

function dragStart(event) {
	event.target.classList.add('hold');
	setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragEnd(event) {
	event.target.className = 'item';
}

function dragover(event) {
	event.preventDefault();
}

function dragenter(event) {
	event.target.classList.add('hovered');
}

function dragleave(event) {
	event.target.classList.remove('hovered');
}

function dragdrop(event) {
	event.target.classList.remove('hovered');
	event.target.append(item);
}
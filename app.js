const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const openViewLinks = document.querySelectorAll('[data-open-view]');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const modal = document.getElementById('eventModal');
const openModalTriggers = document.querySelectorAll('[data-open-modal]');
const closeModal = document.getElementById('closeModal');
const segmentedGroups = document.querySelectorAll('.segmented');

function activateView(name) {
  navItems.forEach((item) => item.classList.toggle('is-active', item.dataset.view === name));
  views.forEach((view) => view.classList.toggle('is-active', view.id === `view-${name}`));
  sidebar.classList.remove('open');
}

navItems.forEach((item) => {
  item.addEventListener('click', () => activateView(item.dataset.view));
});

openViewLinks.forEach((button) => {
  button.addEventListener('click', () => activateView(button.dataset.openView));
});

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

openModalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => modal.showModal());
});

closeModal.addEventListener('click', () => modal.close());

modal.addEventListener('click', (event) => {
  const dialogBounds = modal.getBoundingClientRect();
  const clickedInDialog =
    dialogBounds.top <= event.clientY &&
    event.clientY <= dialogBounds.top + dialogBounds.height &&
    dialogBounds.left <= event.clientX &&
    event.clientX <= dialogBounds.left + dialogBounds.width;

  if (!clickedInDialog) {
    modal.close();
  }
});

segmentedGroups.forEach((group) => {
  const buttons = group.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('is-active'));
      button.classList.add('is-active');
    });
  });
});

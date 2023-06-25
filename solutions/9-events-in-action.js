const initializeTabs = () => {
  const tabWraps = document.querySelectorAll('.row');

  const handleClick = (event) => {
    event.preventDefault();

    const currentTab = event.target;
    const tabList = currentTab.closest('.row');
    const activeTab = tabList.querySelector('.nav-link.active');
    const activeContent = tabList.querySelector('.tab-pane.active');
    const targetTab = tabList.querySelector(currentTab.dataset.bsTarget);

    activeTab.classList.remove('active');
    activeContent.classList.remove('active');
    targetTab.classList.add('active');
    currentTab.classList.add('active');
  };

  tabWraps.forEach((tabWrap) => {
    const tabs = tabWrap.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', handleClick);
    });
  });
};

export default initializeTabs;

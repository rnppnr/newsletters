(() => {
  const cards = document.querySelectorAll('.card-text');
  const checkImgs = document.querySelectorAll('.check-img');
  const subscribeBtn = document.getElementById('subscribe-btn');
  const emailAddress = document.getElementById('email-address');

  const subscribed = [];

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.id.split('_')[1];
      const title = document.getElementById(`card-title_${id}`).innerHTML;
      const checkImg = document.getElementById(`check-img_${id}`);
      checkImg.classList.toggle('checked');
      (subscribed.includes(title) ? subscribed.splice(subscribed.indexOf(title), 1) : subscribed.push(title));
    });
  });

  checkImgs.forEach(checkImg => {
    checkImg.classList.toggle('checked');
  });

  subscribeBtn.addEventListener('click', () => {
    if (emailAddress.value === "") {
      alert("Please enter your email address.");
      return;
    }
    if (subscribed.length === 0) {
      alert("Please select at least one newsletter.");
      return;
    }
    subscribed.sort();
    alert("Thank you for subscribing to: \n" + subscribed.join(", \n") + ".\n");
  });

})();
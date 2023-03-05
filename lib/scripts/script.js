const goHome = () => {
  window.location = '{{ base-path }}/';
}
const showMenu = (data) => console.log(data);
const blocks = document.querySelectorAll('pre');

/**
 * Copy contents of code to clipboard
 * @param {HTMLPreElement} block 
 * @param {HTMLButtonElement} copyIcon
 */
const copyCode = async (block, copyIcon) => {
  const code = block.querySelector('code');
  const notify = copyIcon.querySelector('span');
  const text = code.innerText;
  await navigator.clipboard.writeText(text)
    .then(() => {
      notify.style.display = 'block'
      setTimeout(() => {
        notify.style.display = 'none';
      }, 2000)
    })
}

blocks.forEach(block => {
  const copyIcon = document.createElement('button');
  copyIcon.className = 'copy-btn';
  copyIcon.innerHTML = '<i class="fa-regular fa-copy"></i>';
  const notify = document.createElement('span');
  notify.innerText = 'Copied to clipboard!';
  notify.className = 'text-to-clipboard';
  notify.style.display = 'none'
  copyIcon.appendChild(notify);
  block.appendChild(copyIcon);
  copyIcon.addEventListener('click', async () => await copyCode(block, copyIcon));
});

const ReturnBack = () => history.back()

const ErrorDiv = document.getElementById('error-page');
const onError = () => {
  const errorNode = document.createElement('div');
  errorNode.innerHTML = `
  <h3>OOPS AN ERROR OCCURED</h3>
  <p>
    The following resource could not be found:<br/>
    <span>${document.URL}</span>
  </p>
  <div class="btn-group">
    <button onclick="history.back()">GO BACK</button>
    <button onclick="goHome()">Goto HOMEPAGE</button>
  </div>
  `
  ErrorDiv.appendChild(errorNode)
}

const setupPage = () => {
  const body = document.querySelector('body')
  const footer = document.querySelector('footer')
  if (body.offsetHeight < window.innerHeight) {
    footer.style.position = 'absolute'
    footer.style.bottom = '0'
    footer.style.width = '100%'
  } else {
    footer.style.position = 'static'
  }
}

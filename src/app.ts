console.log("Put code in here...")
const button = document.querySelector('button')!;

function clickHandler(message: string) {
  console.log('Clicked! ' + message)
}

button?.addEventListener('click', () => {
  console.log('Clicked!');
});
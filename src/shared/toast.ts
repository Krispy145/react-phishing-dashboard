let styleInjected = false;
export function toast(message: string, duration = 3000) {
  if (!styleInjected) {
    const style = document.createElement('style');
    style.textContent = `. __toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:rgba(0,0,0,.85);color:#fff;padding:10px 14px;border-radius:6px;font-size:14px;z-index:9999;opacity:0;transition:opacity .2s;max-width:80%;text-align:center;box-shadow:0 4px 16px rgba(0,0,0,.25)}.__toast.show{opacity:1}`.replace('. ', '.');
    document.head.appendChild(style);
    styleInjected = true;
  }
  const el = document.createElement('div');
  el.className = '__toast';
  el.textContent = message;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 200); }, duration);
}
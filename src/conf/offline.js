import runtime from 'offline-plugin/runtime';

export default function () {

  if (process.env.NODE_ENV === 'production') {
    runtime.install({
      onUpdateReady() {
        runtime.applyUpdate();
      },
      onUpdated() {
        window.location.reload();
      },
    });
  }

}
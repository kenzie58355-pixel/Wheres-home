export function playStampSound(enabled: boolean) {
if (!enabled) return;
try {
const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
const osc = ctx.createOscillator();
const gain = ctx.createGain();
osc.type = "sine";
osc.frequency.setValueAtTime(700, ctx.currentTime);
osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);
gain.gain.setValueAtTime(0.15, ctx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
osc.connect(gain).connect(ctx.destination);
osc.start();
osc.stop(ctx.currentTime + 0.1);
} catch (e) {}
}

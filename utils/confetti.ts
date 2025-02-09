import confetti from 'canvas-confetti';

export const signInConfetti = (): Promise<undefined> | null => {
  return confetti({
    particleCount: 100,
    spread: 360,
    ticks: 250,
    startVelocity: 35,
  });
};

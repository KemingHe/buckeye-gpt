describe('signInConfetti() utililty', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.resetAllMocks();
  });

  it('calls confetti with correct parameters', async () => {
    vi.doMock('canvas-confetti', () => ({
      __esModule: true,
      default: vi.fn().mockResolvedValue(undefined),
    }));
    const { default: confetti } = await import('canvas-confetti');
    const { signInConfetti } = await import('@/utils/confetti');
    signInConfetti();
    expect(confetti).toHaveBeenCalledWith({
      particleCount: 100,
      spread: 360,
      ticks: 250,
      startVelocity: 35,
    });
    expect(confetti).toHaveBeenCalledTimes(1);
  });

  // NOTE: Testing the return value is not necessary, as it's Promise<undefined> | null.
});

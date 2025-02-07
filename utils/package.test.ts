describe('getVersion() package utility', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.resetAllMocks();
  });

  // IMPORTANT: JSON module is mocked differently than ESM.
  it('returns the version from package.json', async () => {
    const mockVersion: string = '1.0.0';
    vi.doMock('@/package.json', () => ({
      __esModule: true,
      default: { version: mockVersion },
    }));
    const { getVersion } = await import('@/utils/package');
    expect(getVersion()).toBe(mockVersion);
  });

  it('handles labeled version', async () => {
    const mockVersion: string = '1.0.0-alpha.1';
    vi.doMock('@/package.json', () => ({
      __esModule: true,
      default: { version: mockVersion },
    }));
    const { getVersion } = await import('@/utils/package');
    expect(getVersion()).toBe(mockVersion);
  });
});

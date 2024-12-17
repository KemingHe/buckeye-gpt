import '@testing-library/jest-dom';
import { config } from 'dotenv-safe';

// When testing locally, use dotenv-safe to load environment variables
// from .env file to ensure no missing variables.
if (!process.env.CI) config();

// For responsive components, use Playwright's screenshot.

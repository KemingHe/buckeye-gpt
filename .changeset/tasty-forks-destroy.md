---
"buckeye-gpt": minor
---

Added LangSmith tracing for all LangChain OpenAI calls. Found bug where LangSmith project is correctly set in app but not recognized in the SaaS; current workaround is to use the auto-default project.

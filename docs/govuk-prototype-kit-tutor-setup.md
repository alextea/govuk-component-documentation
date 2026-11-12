# Set up the Prototype Kit coding tutor

The [coding tutor](govuk-prototype-kit-tutor.md) is a set of instructions, not a model or an extension. You can use it with different assistants and their supported models. Choose one option below; you do not need to configure every tool.

These examples keep tutoring opt-in. Do not replace your existing project instructions or add the full tutor to global instructions unless you want teaching to be the default everywhere.

## Prepare the documentation

For a coding assistant with access to your project, copy this repository's `docs/` folder into your prototype as `docs/govuk/`. The examples below assume these paths, relative to your prototype's root:

```text
docs/govuk/
  govuk-prototype-kit-tutor.md
  govuk-prototype-kit-guide.md
  govuk-frontend-guide.md
  govuk-frontend-styles.md
  components/
```

If you keep the docs elsewhere, update the paths in the example you use. Relative links inside the tutor refer to its neighbouring documentation.

For a chat tool without project-file access, upload the tutor, both guides and the relevant component or styles references instead. Upload a small relevant selection rather than every component. Do not upload secrets, real participant data or project material your organisation does not permit you to share.

## Quick start: any assistant

Start a new conversation and send:

```text
Read docs/govuk/govuk-prototype-kit-tutor.md and follow it as my coding tutor.
Use the neighbouring Prototype Kit guide, Frontend guide and relevant references.
Teach through small explain/try/check steps, then wait for my attempt.
Do not write my solution unless I explicitly ask for code.
Do not edit files or run commands on my behalf unless I explicitly ask.

I want to learn how to [describe your page, flow or problem].
```

Attach the files if the assistant cannot read them. A path or a link alone does not give a chat tool access to your local files.

Instructions influence behaviour but do not enforce permissions. Where supported, use read-only tools or approval controls as well. If existing instructions say to implement requests automatically, resolve that conflict for the tutoring session before starting.

## GitHub Copilot in VS Code: a selectable custom agent

Create `.github/agents/prototype-tutor.agent.md` in your prototype project with:

```markdown
---
name: Prototype Tutor
description: Help designers learn the GOV.UK Prototype Kit through guided practice.
tools: ['read', 'search']
---

Act as the learner's coding tutor.

First read docs/govuk/govuk-prototype-kit-tutor.md and follow its instructions.
Use its neighbouring guides and component references as needed.
If you cannot read the tutor, explain what is missing and ask for it.

Teach one small step, describe the expected result, then wait for the learner.
Do not generate their solution unless explicitly asked for code.
Do not edit files or run terminal commands.
```

In Copilot Chat, select **Prototype Tutor** from the agent dropdown and describe what you want to learn. If it is missing, check the project folder is open and use **Chat: Open Customizations** to inspect the agent for errors.

The example deliberately enables only reading and search tools. It can explain code and provide requested code in chat, but it cannot apply edits or start the Kit. If you explicitly want implementation, switch to your normal coding agent and specify the change; return to the tutor afterwards.

To leave tutoring, switch agents and start a fresh chat. This example targets the Copilot harness in VS Code, not every product that uses the Copilot name.

[Official custom-agent documentation](https://code.visualstudio.com/docs/agent-customization/custom-agents)

## Claude Code: an explicitly invoked skill

Create `.claude/skills/prototype-tutor/SKILL.md` in your prototype project with:

```markdown
---
name: prototype-tutor
description: Guided GOV.UK Prototype Kit coding lessons for designers.
disable-model-invocation: true
---

The user has chosen to start a tutoring session.
Read docs/govuk/govuk-prototype-kit-tutor.md and follow its instructions.
Use its neighbouring guides and component references as needed.
If you cannot read the tutor, explain what is missing and ask for it.

Teach one small step, describe the expected result, then wait for the learner.
Do not generate their solution unless explicitly asked for code.
Do not edit files or execute commands unless explicitly asked for that action.
```

Start Claude Code in your prototype project and invoke:

```text
/prototype-tutor
```

Then describe your goal or attach your design. `disable-model-invocation: true` prevents Claude from automatically choosing this skill: you invoke it deliberately.

This skill does not restrict tool permissions. Keep permission approvals enabled and review proposed actions; do not treat the wording as a read-only sandbox. Start a fresh session without invoking the skill when you want normal coding assistance.

[Official skills documentation](https://code.claude.com/docs/en/skills)

## Cursor: a manually attached rule

Create `.cursor/rules/prototype-tutor.mdc` in your prototype project with:

```markdown
---
alwaysApply: false
---

When this rule is explicitly attached, act as the learner's coding tutor.
Read docs/govuk/govuk-prototype-kit-tutor.md and follow its instructions.
Use its neighbouring guides and component references as needed.
If you cannot read the tutor, explain what is missing and ask for it.

Teach one small step, describe the expected result, then wait for the learner.
Do not generate their solution unless explicitly asked for code.
Do not edit files or execute commands unless explicitly asked for that action.
```

Attach the rule in chat with `@prototype-tutor`, then describe your goal. Keep `description` and `globs` omitted and `alwaysApply: false` so the rule is manual rather than automatically selected or attached to files.

The rule controls instructions, not tool permissions. Review actions and use non-editing or approval controls available in your version of Cursor. To stop tutoring, start a new chat without attaching the rule.

[Official rules documentation](https://cursor.com/docs/rules)

## Codex: a dedicated tutoring conversation

Open your prototype project in Codex and use the [quick-start prompt](#quick-start-any-assistant). No configuration file is required.

Do not replace an existing `AGENTS.md` with the tutor: Codex loads project instructions automatically, which would make tutoring the default rather than an opt-in role. Keep the teaching request in a separate conversation, use appropriate permission controls and start a new conversation for normal implementation work.

[Official project-instructions documentation](https://developers.openai.com/codex/guides/agents-md)

## ChatGPT and Claude: a chat or a dedicated project

For a single session, upload the documents and paste the following prompt into a new chat. For repeated use, create a separate project named **Prototype Kit tutor**, upload the documents as project files or knowledge, and put this text in its project instructions:

```text
Act as my GOV.UK Prototype Kit coding tutor.
Read the uploaded govuk-prototype-kit-tutor.md and follow it as instructions.
Use the uploaded guides and component references; ask if something is missing.
Teach through small explain/try/check steps, then wait for my attempt.
Explain relevant coding and GOV.UK design concepts with trusted learning links.
Do not write my solution unless I explicitly ask for code.
Do not edit files or run commands on my behalf unless I explicitly ask.
Do not claim access to my local project or a running browser that you do not have.
```

- **ChatGPT:** create a project, add the files and use **Project settings** to add project instructions.
- **Claude:** create a project, add files to its knowledge and use **Set project instructions**.

Start a conversation inside that project and describe your goal or upload a design image. Supply relevant code or error text when troubleshooting: the chat does not automatically see your editor or terminal.

A dedicated project makes tutoring the default only inside that project. Use a chat outside it when you do not want tutoring. Availability, file limits and menus depend on your product, plan and organisation's settings.

Official guidance: [ChatGPT projects](https://help.openai.com/en/articles/10169521-projects-in-chatgpt) and [Claude projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects).

## Check your setup

Before relying on an integration, try these prompts in a fresh tutoring conversation:

1. **"Help me build a page asking how someone wants to be contacted."** Expect a small teaching step, not a finished page or file edits.
2. **"What is progressive enhancement?"** Expect an explanation related to the prototype and a relevant trusted source.
3. **"Show me just the radios macro for that question; do not edit files."** Expect only the requested code and an explanation, with no edits.

Check tool activity as well as the response. Confirm the assistant can read the tutor and is not guessing its contents. If it takes over, check which instructions and tools are active and whether the selected agent, skill or rule loaded correctly. These configuration examples need checking in your own tool; they are not a guarantee of model behaviour.

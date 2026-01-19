# Claude Code Plugins Guide

This project uses Claude Code plugins to enhance the development workflow.

## Installed Plugins

| Plugin            | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| `feature-dev`     | 7-phase guided feature development workflow     |
| `frontend-design` | Production-grade UI with distinctive aesthetics |
| `code-review`     | Multi-agent PR review with confidence scoring   |

## Installation

Run the install script:

```bash
./bin/install-plugins.sh
```

Team members will be prompted to trust the plugins when they first open the project.

## Plugin Usage

### /feature-dev

A structured 7-phase workflow for developing new features:

1. **Requirements** - Clarify what needs to be built
2. **Research** - Explore codebase and understand patterns
3. **Design** - Plan the implementation approach
4. **Implementation** - Write the code
5. **Testing** - Verify the feature works
6. **Review** - Self-review for quality
7. **Documentation** - Update docs if needed

**When to use:**

- Building new features
- Implementing complex functionality
- When you want structured guidance through development

**Usage:**

```
/feature-dev
```

### /code-review

Multi-agent PR review with confidence scoring.

**Usage:**

```
/code-review           # Review current changes
/code-review --comment # Review and post comments to PR
```

**Features:**

- Multiple specialized review agents
- Confidence scoring for findings
- Actionable feedback

### frontend-design

Automatically activated when working on frontend code. Creates distinctive, production-grade interfaces with high design quality.

**Capabilities:**

- Generates creative, polished UI code
- Avoids generic AI aesthetics
- Production-ready components

This skill activates automatically when building web components, pages, or applications.

## Quick Reference

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| `/feature-dev`           | Start guided feature development |
| `/code-review`           | Review current changes           |
| `/code-review --comment` | Review and comment on PR         |

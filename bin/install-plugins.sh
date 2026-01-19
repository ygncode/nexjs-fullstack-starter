#!/bin/bash
# Install Claude Code plugins at project scope

set -e

echo "Installing Claude Code plugins for project..."

# Add the official Anthropic marketplace (ignore if already added)
claude plugin marketplace add anthropics/claude-code 2>/dev/null || true

# Install plugins at project scope (shared with team)
claude plugin install feature-dev@claude-code-plugins --scope project
claude plugin install frontend-design@claude-code-plugins --scope project
claude plugin install code-review@claude-code-plugins --scope project

echo "Done! Plugins installed at project scope."
echo "Team members will be prompted to install when they trust this repository."

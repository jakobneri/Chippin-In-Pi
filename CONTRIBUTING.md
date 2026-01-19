# Contributing to Chippin-In-Pi

Thank you for your interest in contributing to Chippin-In-Pi! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Use this tool responsibly and legally

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/jakobneri/Chippin-In-Pi/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - System information (OS, Node version, Pi model)
   - Error messages or logs

### Suggesting Features

1. Check [existing issues](https://github.com/jakobneri/Chippin-In-Pi/issues) for similar suggestions
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach

### Pull Requests

1. **Fork the repository**

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the coding style (see below)
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   ```bash
   npm test
   npm run lint
   node cli/index.js --help  # Test CLI
   ```

5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
   Use clear, descriptive commit messages

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Describe what changes you made
   - Reference any related issues
   - Explain why the changes are needed

## Development Guidelines

### Coding Style

- Use ES6+ JavaScript features
- Use ES modules (`import`/`export`)
- Follow existing code patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### File Organization

```
cli/          # CLI commands and utilities
server/       # Backend server code
  routes/     # API route handlers
  middleware/ # Express middleware
  config/     # Configuration files
frontend/     # Angular frontend
shared/       # Shared types and utilities
docs/         # Documentation
```

### Adding New CLI Commands

1. Create command file in `cli/commands/`
2. Export a Commander command
3. Import and add to `cli/index.js`
4. Update README with new command

Example:
```javascript
import { Command } from 'commander';

const myCommand = new Command('mycommand')
  .description('My new command');

myCommand
  .command('action')
  .description('Perform action')
  .action(() => {
    // Implementation
  });

export { myCommand };
```

### Adding API Endpoints

1. Create or update route file in `server/routes/`
2. Use Express Router
3. Add proper error handling
4. Document the endpoint
5. Update API documentation in README

Example:
```javascript
import express from 'express';

const router = express.Router();

router.get('/endpoint', (req, res) => {
  try {
    // Implementation
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
```

### Adding Security Tools

1. Create tool implementation in appropriate location
2. Add to tools list in `cli/commands/tools.js`
3. Add API endpoint in `server/routes/tools.js`
4. Document the tool
5. Add usage examples

## Testing

Currently, the project uses manual testing. Automated tests are planned.

Manual testing checklist:
- [ ] CLI commands work as expected
- [ ] Server starts and responds correctly
- [ ] No console errors
- [ ] Changes work on Raspberry Pi (if applicable)

## Documentation

- Update README.md for user-facing changes
- Update docs/ for architectural changes
- Add inline comments for complex code
- Update ARCHITECTURE.md for structural changes

## Security

- Never commit sensitive data (API keys, passwords, etc.)
- Test security tools in isolated environments only
- Report security vulnerabilities privately via GitHub Security
- Follow responsible disclosure practices

## Questions?

- Open an issue for questions about contributing
- Check existing issues and pull requests
- Review the documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to Chippin-In-Pi! 🎉

# Security Policy

## Supported Versions

Only the latest version of Animal Card Collection receives security updates.

| Version | Supported |
|---------|-----------|
| 1.x.x   | ✅        |
| < 1.0   | ❌        |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it privately.

**DO NOT open public issues for security vulnerabilities.**

### How to Report

1. Contact me directly on Twitter: [@xenon_d62](https://x.com/xenon_d62)
2. Or send an email to: xenon_d62@proton.me (if available)
3. Include detailed information about the vulnerability
4. Include steps to reproduce the issue

### What to Expect

- I will respond within 48 hours
- I will confirm the vulnerability
- I will work on a fix as quickly as possible
- I will credit you for the discovery (if you wish)

## Security Best Practices for Users

### Data Storage

- All user data is stored locally in your browser's localStorage
- No sensitive data is sent to external servers
- Your wallet address is only used for display purposes

### Payments

- All payments are manual transfers to the developer wallet
- Always verify the wallet address before sending:
  `0xA79b23182e191fDFb5049FFFb5BEE54830980c81`
- Never share your private keys or seed phrase
- The game will never ask for your private keys

### Browser Security

- Keep your browser updated to the latest version
- Use trusted browser extensions only
- Be cautious of phishing attempts

## Security Measures in Place

- Content Security Policy headers via vercel.json
- Input validation for all user inputs
- Sanitization of localStorage data
- No eval() or dangerous JavaScript functions

## Responsible Disclosure

I appreciate responsible disclosure of security vulnerabilities.

If you find a security issue, please:

1. Do not exploit the vulnerability
2. Do not disclose it publicly until I have fixed it
3. Give me reasonable time to address the issue

## Acknowledgments

Thank you to everyone who helps make Animal Card Collection more secure.

Last updated: May 2025

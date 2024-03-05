# Supported Versions

This section outlines the versions of our project that currently receive security updates and support. Ensuring that you are using a supported version is crucial for maintaining the security and stability of your system.

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

Versions marked with a check mark (:white_check_mark:) are actively supported, meaning they receive timely security updates and patches. Versions marked with a cross (:x:) are no longer supported, and users are strongly advised to upgrade to a supported version to ensure their systems remain secure.

## Reporting a Vulnerability

We take security vulnerabilities seriously and encourage responsible disclosure. If you discover a vulnerability in our project, please report it promptly by sending an email to [nidec.controltechniques.inters@gmail.com](mailto:nidec.controltechniques.interns@gmail.com).

When reporting a vulnerability, please include the following details:

- A detailed description of the vulnerability, including its potential impact
- Steps to reproduce the vulnerability, if possible
- Any additional information or context that may assist in understanding or mitigating the issue

We aim to acknowledge receipt of vulnerability reports within 7 business days. Throughout our investigation, we will keep you informed of our progress and any necessary actions. Once a vulnerability is confirmed, we will work diligently to provide a fix and release it in a timely manner.

Your cooperation in helping us maintain the security of our project is greatly appreciated. Thank you for your assistance.

## Sample Use Cases

- **Scenario 1**: John is managing a large-scale deployment of our project within his organization. He wants to ensure that his system remains secure and protected against potential threats. By referring to the supported versions table, John can verify if his current version is actively supported. If not, he can plan an upgrade to a supported version to maintain the security posture of his infrastructure.

- **Scenario 2**: Sarah is a developer working on a project that relies on our software. She encounters a security vulnerability while integrating our project into her application. Sarah knows the importance of responsible disclosure and promptly reports the vulnerability to our security team. With clear instructions provided in the "Reporting a Vulnerability" section, Sarah ensures that the vulnerability is addressed efficiently, contributing to the overall security of our project ecosystem.

## Sample Vulnerabilities

1. **SQL Injection**: An attacker may exploit a vulnerability in the application's input validation mechanism to inject malicious SQL queries, potentially gaining unauthorized access to the database or executing arbitrary commands.

2. **Cross-Site Scripting (XSS)**: A flaw in the application's handling of user-supplied input allows attackers to inject malicious scripts into web pages viewed by other users. This could lead to unauthorized data disclosure or manipulation of user sessions.

3. **Insecure Direct Object References (IDOR)**: Improper authorization checks may allow attackers to access resources or perform actions that they are not authorized to, by manipulating object references in requests. For example, accessing another user's private data by tampering with URL parameters.

4. **Authentication Bypass**: Weaknesses in the authentication mechanism could enable attackers to bypass authentication controls and gain unauthorized access to sensitive areas of the application or perform actions on behalf of other users.

5. **Sensitive Data Exposure**: The application may inadvertently expose sensitive information, such as passwords, credit card numbers, or personal data, due to improper handling or insecure storage of sensitive data.

6. **Denial of Service (DoS)**: Vulnerabilities in the application's design or implementation may allow attackers to exploit resource exhaustion or other weaknesses to disrupt the availability of the service for legitimate users.

## Sample User-Reported Vulnerability

- **Scenario**: Mary, a user of our software, notices unusual behavior while using the application. Upon further investigation, Mary discovers a vulnerability that allows unauthorized access to certain features without proper authentication. Concerned about the security implications, Mary decides to report the issue to our security team.
  
- **Details**: Mary provides a detailed description of the vulnerability, explaining how it bypasses authentication controls and grants unauthorized access to sensitive features. She also includes steps to reproduce the vulnerability, making it easier for our team to understand and address the issue.
  
- **Outcome**: Our security team promptly acknowledges Mary's report and begins investigating the vulnerability. After confirming the issue and developing a fix, we release an update to address the vulnerability, ensuring that all users are protected against this security threat. Mary's responsible disclosure helps enhance the security of our software and protects other users from potential risks.

export function isDomainBlacklistedShort(email: string): boolean {
    return !BLACKLISTED_DOMAINS_SET.has(email.split("@")[1]);
}

const BLACKLISTED_DOMAINS_SET = new Set([
    "temp-mail.org",
    "guerrillamail.com",
    "10minutemail.com",
    "emailondeck.com",
    "yopmail.com",
    "burnermail.io",
    "maildrop.cc",
    "mailinator.org"
]);
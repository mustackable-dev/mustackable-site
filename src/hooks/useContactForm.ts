export function useContactForm() {
    function validateEmailAddress(): boolean {
        return true;
    }
    async function sendContactForm(): Promise<boolean> {
        await deliverEmails();
        return await Promise.resolve(true);
    }

    async function deliverEmails() {
        await Promise.resolve(true);
    }

    return { validateEmailAddress, sendContactForm };
}
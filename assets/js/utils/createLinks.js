function createLinks(contacts) {
  return contacts
    .map((contact) => {
      const { hostname } = new URL(contact);

      if (SUPPORTED_SOC_NET.has(hostname)) {
        const classIco = SUPPORTED_SOC_NET.get(hostname);

        return createElement('a', {
          attributes: { href: contact },
          classNames: [classIco, 'fa'],
        });
      }
      return;
    })
    .filter(Boolean)
}

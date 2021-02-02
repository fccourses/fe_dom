/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {function} options.onClick - click handler
 * @param {object} options.attributes - click handler
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(
  type = 'div',
  { classNames = [], onClick = null, attributes = {} } = {},
  ...children
) {
  /*
  EXAMPLE OF ATTR OBJECT
  const attr = {
    src: 'https://link.com',
    alt: 'descr',
    title: 'descr',
  };
   */
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  for (const [attrName, attrValue] of Object.entries(attributes)) {
    elem.setAttribute(attrName, attrValue);
  }
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}

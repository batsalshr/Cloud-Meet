import { V as attr, Z as bind_props } from "./index2.js";
function SimpleWysiwyg($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = "", placeholder = "Enter description..." } = $$props;
    $$renderer2.push(`<div class="border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent"><div class="flex items-center gap-1 p-2 bg-gray-50 border-b border-gray-300"><button type="button" class="p-1.5 rounded hover:bg-gray-200 transition" title="Bold"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z"></path><path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"></path></svg></button> <button type="button" class="p-1.5 rounded hover:bg-gray-200 transition" title="Italic"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line></svg></button> <button type="button" class="p-1.5 rounded hover:bg-gray-200 transition" title="Underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3v7a6 6 0 0012 0V3"></path><line x1="4" y1="21" x2="20" y2="21"></line></svg></button> <div class="w-px h-5 bg-gray-300 mx-1"></div> <button type="button" class="p-1.5 rounded hover:bg-gray-200 transition" title="Bullet List"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><circle cx="4" cy="6" r="1" fill="currentColor"></circle><circle cx="4" cy="12" r="1" fill="currentColor"></circle><circle cx="4" cy="18" r="1" fill="currentColor"></circle></svg></button> <button type="button" class="p-1.5 rounded hover:bg-gray-200 transition" title="Numbered List"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="10" y1="6" x2="21" y2="6"></line><line x1="10" y1="12" x2="21" y2="12"></line><line x1="10" y1="18" x2="21" y2="18"></line><text x="3" y="7" font-size="6" fill="currentColor" stroke="none">1</text><text x="3" y="13" font-size="6" fill="currentColor" stroke="none">2</text><text x="3" y="19" font-size="6" fill="currentColor" stroke="none">3</text></svg></button></div> <div contenteditable="true" class="min-h-[120px] p-3 outline-none prose prose-sm max-w-none svelte-15chj8b"${attr(
      "data-placeholder",
      // Set initial content only once when editor is mounted
      placeholder
    )}></div></div>`);
    bind_props($$props, { value });
  });
}
export {
  SimpleWysiwyg as S
};

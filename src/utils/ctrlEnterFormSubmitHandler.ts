export default function ctrlEnterFormSubmitHandler(event: KeyboardEvent): void {
  // Short-circuit if the event target is not defined
  // i.e. the event target is not an element.
  if (!event.target) return;

  const { key, metaKey, ctrlKey } = event;

  // Short-circuit if the Apple Meta (⌘) or Control (Ctrl) key is not pressed.
  if (!(metaKey || ctrlKey)) return;

  // Short-circuit if the other key pressed is not the "Enter" key.
  if (key !== "Enter") return;

  // Submit the form if the event target is a form element.
  if ("form" in event.target) {
    const formElement = event.target.form as HTMLFormElement;
    formElement?.requestSubmit();
  }
}

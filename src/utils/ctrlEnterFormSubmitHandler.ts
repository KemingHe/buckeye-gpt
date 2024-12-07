export default function ctrlEnterFormSubmitHandler(event: KeyboardEvent) {
  if (!event.target) return;

  const { key, metaKey, ctrlKey } = event;
  if (key !== "Enter" || !(metaKey || ctrlKey)) return;

  if ("form" in event.target) {
    const formElement = event.target.form as HTMLFormElement;
    formElement?.requestSubmit();
  }
}

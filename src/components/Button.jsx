export default function Button({
  children,
  mode = "filled",
  Icon,
  className,
  ...props
}) {
  let cssStyles = `button ${mode}-button`;

  if (className) {
    cssStyles += ` ${className}`;
  }
  if (Icon) {
    cssStyles += " icon-button";
  }
  return (
    <button className={cssStyles} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

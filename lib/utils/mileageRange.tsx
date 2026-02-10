export const mileageRange = (
    from?: number,
    to?: number
  ) => {
    const format = (value: number) =>
      value.toLocaleString("en-US");
  
    if (from && to) return `From ${format(from)} To ${format(to)}`;
    if (from) return `From ${format(from)}`;
    if (to) return `To ${format(to)}`;
    return "";
  };
  
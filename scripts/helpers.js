hexo.extend.helper.register("js", (path) => {
  return `<script src="${path}"></script>`;
});

hexo.extend.helper.register("monthYear", (date_str) => {
    options = { month: "short", year: "numeric" };
    const [year_str, month_str] = date_str.split("-");
    const year = parseInt(year_str);
    const month = parseInt(month_str) - 1;
    date = new Date(year, month)
    return date.toLocaleDateString("en-US", options);
});

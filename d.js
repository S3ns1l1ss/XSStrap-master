<script>
(async () => {
  const res = await fetch("/a.html", { cache: "no-store" });
  const html = await res.text();

  // Mevcut DOM’u komple çöpe at
  document.open();
  document.write(html);
  document.close();
})();
</script>

async function submitAppeal() {
  const banId = document.getElementById("banId").value;
  const content = document.getElementById("content").value;
  const evidence = document.getElementById("evidence").value;

  const res = await fetch("/appeals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      banId,
      content,
      evidence,
      userId: 0,
      username: "Unknown"
    })
  });

  document.getElementById("status").innerText = "Appeal submitted.";
}

async function loadAppeals() {
  const res = await fetch("/admin/appeals");
  const appeals = await res.json();

  const table = document.getElementById("appeals");

  appeals.forEach(a => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${a.id}</td>
      <td>${a.banId}</td>
      <td>${a.username}</td>
      <td>${a.status}</td>
      <td>
        <button onclick="resolve(${a.id}, 'accept')">Accept</button>
        <button onclick="resolve(${a.id}, 'deny')">Deny</button>
      </td>
    `;
  });
}

async function resolve(id, action) {
  await fetch(`/admin/appeals/${id}/${action}`, { method: "POST" });
  location.reload();
}

if (document.getElementById("appeals")) {
  loadAppeals();
}

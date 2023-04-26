// 發起揪團
const activityTime = document.getElementById("activityTime");
  const deadline = document.getElementById("deadline");

  activityTime.addEventListener("change", function() {
    // 活動時間大於最晚審核時間時，阻止表單提交
    if (new Date(activityTime.value) > new Date(deadline.value)) {
      alert("最晚審核時間不能早於活動時間");
      activityTime.value = "";
      deadline.value = "";
    }
  });

  deadline.addEventListener("change", function() {
    // 最晚審核時間小於活動時間時，阻止表單提交
    if (new Date(deadline.value) < new Date(activityTime.value)) {
      alert("最晚審核時間不能早於活動時間");
      activityTime.value = "";
      deadline.value = "";
    }
  });
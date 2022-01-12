const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

seriesDurations.push({
  title: "Dark",
  days: 0,
  hours: 22,
  minutes: 58,
});
seriesDurations.push({
  title: "Castle",
  days: 5,
  hours: 9,
  minutes: 45,
});
seriesDurations.push({
  title: "Behind Her Eyes",
  days: 0,
  hours: 5,
  minutes: 0,
});
seriesDurations.splice(0, 3);
console.log(seriesDurations);

function logOutSeriesText(arrayOfFavSeries, lifespan) {
    const daysOfYourLife = lifespan * 365.25;
    let totalSpentTimeForSeries = 0;
    arrayOfFavSeries.forEach((series) => {
      const daysForSeries =
        series.days + series.hours / 24 + series.minutes / 1440;
      const spentTimeForSeries = (daysForSeries * 100) / daysOfYourLife;

      console.log(
        `${series.title} took ${spentTimeForSeries.toFixed(3)}% of my life`
      );
      totalSpentTimeForSeries += spentTimeForSeries;
    });
    console.log(`In total that is ${totalSpentTimeForSeries.toFixed(3)}% of my life`)
}

logOutSeriesText(seriesDurations, 80);

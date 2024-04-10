export const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiQk9CQllfIiwidmVyc2lvbiI6InYyLjIuMCIsInJlc2V0X2RhdGUiOiIyMDI0LTA0LTA5IiwiaWF0IjoxNzEyNzM4OTc4LCJzdWIiOiJhZ2VudC10b2tlbiJ9.T9OLsX5cshhlp-_PSh4mMk5zz2QWFWBvGbMCrGjiSuXXZCsLb9jncjifQC3hHx1c3Bo1zep3ks5_P5FGHe-RbWysd8gpX565u50gHX8wu-sd03tpSu1fcwRx3WGBaA3jewRXZpCDfwgxbunQyMCpeP5762nuFCYzx5Zmvz7I4jHtTjP8TUMhEKYU7-nHoOQcrYBPcz_Y5I_EkzAnIgbM-MSdjMMmmIn0nzgSWE26Q3pvTNgA_YyaDoylqmojFhi3qXuNbLpNbG2URdp7xw5r9B9mTIS84mvfZUZAL5X0pV2dAjaBqKDAEk2RUKAQp32QjCcMKe27jH6-6OevKhJZ5Q';

export const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

export const baseURL = 'https://api.spacetraders.io/v2/my/';

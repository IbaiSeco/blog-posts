import { DateFormat } from "../../libs/calendarLib";

test('testing date formatting lib', () => {
    expect(DateFormat({date: "2021-05-09T08:41:56.829Z"})).toBe("May 9, 2021")
})
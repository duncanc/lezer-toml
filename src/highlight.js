
import {styleTags, tags as t} from "@lezer/highlight";

export const tomlHighlighting = styleTags({
  "BareKey BasicStringKey LiteralStringKey": t.attributeName,
  "DecimalInteger HexadecimalInteger OctalInteger BinaryInteger": t.integer,
  "DecimalFloat Infinity NaN": t.float,
  "OffsetDateTime LocalDateTime LocalDate LocalTime": t.atom,
  "True False": t.bool,
  "Comment": t.lineComment,
  "ShortBasicString ShortLiteralString LongBasicString LongLiteralString": t.string,
  '=': t.definitionOperator,
  '.': t.derefOperator,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
});

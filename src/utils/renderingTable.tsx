import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "type" | "where" | "working" | "pros" | "cons" | "example";
  label: string;
  minWidth?: number;
}

const columns: readonly Column[] = [
  { id: "type", label: "Rendering Type", minWidth: 130 },
  { id: "where", label: "Where Rendered", minWidth: 170 },
  { id: "working", label: "How It Works", minWidth: 200 },
  { id: "pros", label: "Pros", minWidth: 170 },
  { id: "cons", label: "Cons", minWidth: 170 },
  { id: "example", label: "Example", minWidth: 170 },
];

interface RenderingRow {
  type: string;
  where: string;
  working: string;
  pros: string;
  cons: string;
  example: string;
}

const rows: RenderingRow[] = [
  {
    type: "CSR",
    where: "Rendering happens in the browser",
    working: "Server sends empty HTML, then JS loads and renders the UI",
    pros: "Fast navigation and smooth UI",
    cons: "First load is slow and SEO is weak",
    example: "React, Vite apps, SPA websites",
  },
  {
    type: "SSR",
    where: "Rendering happens on the server",
    working: "Server generates full HTML and sends it to the browser to display",
    pros: "Fast first load and strong SEO",
    cons: "Heavier load on the server",
    example: "Next.js",
  },
  {
    type: "SSG",
    where: "Page is already rendered at build time",
    working: "Pre-built HTML is served directly",
    pros: "Super fast and cheap to host",
    cons: "Dynamic data is harder to support",
    example: "Blogs, documentation websites",
  },
];

// Shared dark theme so this MUI table matches the rest of the red/black UI.
const darkCellSx = {
  color: "#e2e8f0",
  borderBottomColor: "rgba(229,9,20,0.15)",
};

export default function StickyHeadTable() {
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#0f172a",
        border: "1px solid rgba(229,9,20,0.2)",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="rendering strategy comparison table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    ...darkCellSx,
                    backgroundColor: "#0f172a",
                    color: "#f87171",
                    fontWeight: 700,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                hover
                key={row.type}
                sx={{
                  "&:hover": { backgroundColor: "rgba(229,9,20,0.08)" },
                }}
              >
                {columns.map((column) => (
                  <TableCell key={column.id} sx={darkCellSx}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

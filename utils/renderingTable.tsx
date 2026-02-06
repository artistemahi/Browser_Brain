import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'type' | 'where' | 'working' | 'pros' | 'cons' | 'example';
  label: string;
  minWidth?: number;
  align?: 'left' | 'right' | 'center' | 'inherit' | 'justify';
}

const columns: readonly Column[] = [
  { id: 'type', label: 'Rendering Type', minWidth: 170 },
  { id: 'where', label: 'Where Rendered', minWidth: 170 },
  { id: 'working', label: 'How It Works', minWidth: 200 },
  { id: 'pros', label: 'Pros', minWidth: 170 },
  { id: 'cons', label: 'Cons', minWidth: 170 },
  { id: 'example', label: 'Example', minWidth: 170 },
];


interface Data {
  type: string;
  where: string;
  working: string;
  pros: string;
  cons: string;
  example: string;
}

function createData(
  type: string,
  where: string,
  working: string,
  pros: string,
  cons: string,
  example: string
): Data {
  return { type, where, working, pros, cons, example };
}


const rows = [
  createData(
    "CSR",
    "Rendering happen in Browser",
    "Server send empty HTML then JS load and render UI",
    "Fast navigation and Smooth UI",
    "First load slow and SEO weak",
    "React , VITE apps , SPA websites"
  ),
  createData(
    "SSR",
    "Rendering happen on Server",
    "Server generate full HTML and send to browser then browser display it",
    " Fast first Load and SEO strong",
    "Heacy load on Server",
    "Next.js"
  ),
  createData(
    "SSG",
    "Website already render at Build Time",
    "Pre-built HTML",
    "Super fast and cheap hosting",
    "Dynamic data hard",
    "Blogs, Documentation websites"
  )
];


export default function StickyHeadTable() {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(10);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.type}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

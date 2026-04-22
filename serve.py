import http.server
import socketserver
import os

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Force download and filename for PDFs
        if self.path.lower().endswith('.pdf'):
            filename = os.path.basename(self.path)
            self.send_header('Content-Type', 'application/pdf')
            self.send_header('Content-Disposition', f'attachment; filename="{filename}"')
        super().end_headers()

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    httpd.allow_reuse_address = True
    print(f"Serving at port {PORT}")
    httpd.serve_forever()

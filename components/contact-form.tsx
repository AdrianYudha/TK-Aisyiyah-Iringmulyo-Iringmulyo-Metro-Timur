'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulasi pengiriman formulir
    try {
      // Validasi sederhana
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Silakan lengkapi semua field yang wajib diisi');
      }
      
      // Simulasi delay pengiriman
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset sukses setelah 5 detik
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat mengirim pesan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-lg bg-card shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
        <CardTitle className="text-primary text-xl">Hubungi Kami</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {success ? (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-4 bg-destructive/10 text-destructive rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold mb-2 text-foreground">
                  Nama Lengkap
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Anda"
                  className="w-full px-4 py-2 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-semibold mb-2 text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@contoh.com"
                  className="w-full px-4 py-2 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold mb-2 text-foreground">
                  Nomor WhatsApp (Opsional)
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="081234567890"
                  className="w-full px-4 py-2 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-semibold mb-2 text-foreground">
                  Pesan
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pertanyaan atau pesan Anda di sini..."
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
              disabled={loading}
            >
              {loading ? 'Mengirim...' : 'Kirim Pesan'}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
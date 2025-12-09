import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SummaryService } from '../../services/summary-service';
import { Summary } from '../../interfaces/summary-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [SummaryService]
})
export class HomeComponent {
  private summaryService = inject(SummaryService);

  text = '';
  summary?: Summary;
  loading = false;
  error = '';

  generateSummary(): void {
    if (!this.text.trim() || this.loading) return;

    this.loading = true;
    this.error = '';
    this.summaryService.genereteSummary(this.text).subscribe({
      next: (response) => {
        if (response && response.text) {
          this.summary = response;
        } 
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Não foi possível gerar o resumo. Tente novamente.';
        this.loading = false;
      }
    });
  }

  clear(): void {
    this.text = '';
    this.summary = undefined;
    this.error = '';
  }
}

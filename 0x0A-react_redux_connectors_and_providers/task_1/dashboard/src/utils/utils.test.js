import React from 'react';
import { getFullYear,  getFooterCopy, getLatestNotification } from './utils'

//test getFullYear() 
describe('getFullYear', () => {
    test('returns the current full year', () => {
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toBe(currentYear);
    });
  });

//tests getFooterCopy()
describe('getFooterCopy', () => {
    test('returns "Holberton School" when isIndex is true', () => {
      expect(getFooterCopy(true)).toBe('Holberton School');
    });
  
    test('returns "Holberton School main dashboard" when isIndex is false', () => {
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
  
    test('returns "Holberton School main dashboard" when isIndex is undefined', () => {
      expect(getFooterCopy()).toBe('Holberton School main dashboard');
    });
  
    test('returns "Holberton School main dashboard" when isIndex is a non-boolean value', () => {
      expect(getFooterCopy(1)).toBe('Holberton School main dashboard');
    });
  });

//test getLatestNotification()
describe('getLatestNotification', () => {
    test('returns the correct notification message', () => {
      expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
  });